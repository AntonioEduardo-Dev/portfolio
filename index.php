<?php
	session_start();

	/* INDEX REDIRECIONAMENTO DE PÁGINAS */
    $REQUEST = filter_input(INPUT_SERVER, "REQUEST_URI");
    $INI = strpos($REQUEST,"?");

    if ($INI)
    {
        $REQUEST = substr($REQUEST, 0, $INI);
    }
    
    $REQUEST_PAGINA = substr($REQUEST, 1);
    $URL = explode("/", $REQUEST_PAGINA);
    $URL[2] = (($URL[2] != "" && $URL[2] != "index" && $URL[2] != "index.php") ? $URL[2] : "home");
    
    if (file_exists("client/" . $URL[2] . ".php"))
    {
        if(isset($URL[3]))
        {
            require_once("client/404.php");
        }else
        {
            require_once("client/" . $URL[2] . ".php");
        }
    }elseif(is_dir("client/" . $URL[2]))
    {
        if (isset($URL[2]) && isset($URL[3]) && file_exists("client/" . $URL[2] . "/" . $URL[3] . ".php") && $_SESSION["user"]["tipo_user"] == "admin")
        {
            require_once("client/" . $URL[2] . "/" . $URL[3] . ".php");
        }else
        {
            require_once("client/404.php");
        }
    }else
    {
        require_once("client/404.php");
    }
	/* FIM INDEX REDIRECIONAMENTO DE PÁGINAS */
?>