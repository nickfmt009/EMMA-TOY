//* how too add security password on form using javascript*? 
// See the password_hash() example to see where this came from.
$hash = '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';

if (password_verify($_POST['password'], $hash)) {
     echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}


