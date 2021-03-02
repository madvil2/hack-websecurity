<?php
namespace App\Http;

class JsonErrorResponse
{
    /**
     * @var array
     */
    private $error = [];

    /**
     * JsonErrorResponse constructor.
     * @param integer $status
     * @param integer $code
     * @param string[] $messages
     */
    public function __construct($status, $code, $messages)
    {
        $this->error = [
            'status' => intval($status),
            'errors' => $messages
        ];
    }

    /**
     * Return an error as an array.
     * @return array
     */
    public function asArray()
    {
        return $this->error;
    }

    /**
     * Return an error as a string.
     * @return string
     */
    public function asString()
    {
        return json_encode($this->error);
    }

    public function __toString()
    {
        return $this->asString();
    }
}
