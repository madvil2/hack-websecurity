<?php
namespace App\Components\User\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * @property integer $id ID
 * @property string $first_name First name
 * @property string $last_name Last name
 * @property string $email Email address
 * @property string $password Password hash
 * @property string $password_salt Password salt
 * @property integer $level Level
 * @property boolean $is_active Is Active
 * @property string $created_at Created at
 * @property string $updated_at Updated at
 * @property string $timezone Time zone name
 * @property string $reset_password_token Reset Password Token
 * @property string $reset_password_created_at Reset Password Created At
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * @var array
     */
    public $guarded = ['id'];

    protected $hidden = ['created_at', 'updated_at'];

    protected $with = ['cards'];


    /**
     * @return BelongsTo
     */
    public function timezone()
    {
        return $this->belongsTo(Timezone::class, 'timezone', 'timezone');
    }

    /**
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = Hash::make($password);
    }

    /**
     * Returns an user object for response with roles and timezone.
     * @param integer $id User ID
     * @return User|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|null|object
     */
    public function response($id = null)
    {
        if ($id === null) {
            if ($this->id === null) {
                return null;
            } else {
                $id = $this->id;
            }
        }
        return (new self())->where('id', $id)->with(['timezone',])->first();
    }

    /**
     * @return void
     */
    public function setResetPasswordToken()
    {
        $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 64; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }

        $this->reset_password_token = implode($pass);
        $this->reset_password_created_at = Carbon::now();
    }

    /**
     * @return HasMany
     */
    public function cards()
    {
        return $this->hasMany(UsersCards::class, 'user_id', 'id');
    }
}
