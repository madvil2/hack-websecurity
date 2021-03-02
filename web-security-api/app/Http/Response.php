<?php
namespace App\Http;

use App\Components\Api\QueryBuilder\QueryBuilder;
use App\Components\Common\Interfaces\SerializeInterface;
use InvalidArgumentException;

/**
 * Class Response
 * @package App\Http
 */
class Response extends \Illuminate\Http\JsonResponse
{
    const TYPE_JSON = 1;
    const TYPE_CSV = 2;
    const TYPE_XLS = 3;

    /** @var int */
    private $type = self::TYPE_JSON;

    private $exportHeaders = [];

    public function __construct($data = null, $status = 200, array $headers = [], $options = 0)
    {
        parent::__construct($data, $status, $headers, $options);
    }

    public function getType()
    {
        return $this->type;
    }

    /**
     * Sends content for the current web response.
     *
     * @return $this
     */
    public function sendContent()
    {
        $data = $this->getData(true);
        if ($this->type === self::TYPE_JSON) {
            if (isset($data['data'])) {
                $response = array_merge(['status' => $this->getStatusCode()], $data);
            } else {
                $response = [
                    'status' => $this->getStatusCode(),
                    'data' => $data
                ];
            }

            echo json_encode($response);
        } else {
            if (isset($data['data'])) {
                $data = $data['data'];
            }

            $lines = [];
            if (count($data) > 0 and empty($this->exportHeaders)) {
                $lines[] = array_keys($data[0]);
            } else {
                if (isset($this->exportHeaders[0]) && is_array($this->exportHeaders[0])) {
                    $lines = $this->exportHeaders;
                } else {
                    $lines[] = $this->exportHeaders;
                }
            }
            // Create data rows
            foreach ($data as $datum) {
                $line = [];
                foreach ($datum as $key => $value) {
                    if (!is_array($value)) {
                        $line[$key] = $value;
                    }
                }
                $lines[] = $line;
            }
        }

        return $this;
    }

    /**
     * @param mixed $data
     * @return $this|void
     * @throws \Exception
     */
    public function setData($data = [])
    {
        $this->original = $data;

        if ($data instanceof QueryBuilder) {
            $data = $data->paginate();
        }

        if ($data instanceof SerializeInterface) {
            $data = $data->toArray();
        }

        $json = json_encode($data);
        if (! $this->hasValidJson(json_last_error())) {
            throw new InvalidArgumentException(json_last_error_msg());
        }

        return $this->setJson($json);
    }

    public function setExportHeaders(array $headers) :self
    {
        $this->exportHeaders = $headers;

        return $this;
    }
}
