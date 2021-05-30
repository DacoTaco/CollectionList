<?
/*
 * © Werner Vermeylen
 *   werner.vermeylen@telenet.be
*/

$db_host = "";
$db_user = "";
$db_pass = "";
$db_dbase = "";

$db_handle = @db_connect($db_host, $db_user, $db_pass, $db_dbase);


function db_connect($host, $user, $pass, $dbase)
{
	$db_handle = @mysqli_connect($host, $user, $pass);
	mysqli_select_db($db_handle,$dbase);
	return $db_handle;
}

function db_close()
{
	mysqli_close();
}

$sqldbg = 0;
function db_query($query)
{
	global $sqldbg;
	global $db_handle;
	if ($sqldbg == 1)
	{
		echo "<b>Query:</b> $query<br>\n";
	}
	$ret = mysqli_query($db_handle,$query);
	if ($sqldbg == 1 && !$ret) 
	{
		printf("Error: %s\n", mysqli_error($db_handle));
	}
	return $ret;
}

function db_result($query, $row)
{
	global $db_handle;
	$res_query = mysqli_query($db_handle,$query);
	
	/* TODO : FIX DB_RESULT/mysql_result */
	/*return mysql_result($res_query,(int)$row);*/
	
	
	return dbi_result($res_query,$row,0);
}

function dbi_result($res,$row,$col){ 

    $numrows = mysqli_num_rows($res); 
    if ($numrows && $row <= ($numrows-1) && $row >=0){
        mysqli_data_seek($res,$row);
        $resrow = (is_numeric($col)) ? mysqli_fetch_row($res) : mysqli_fetch_assoc($res);
        if (isset($resrow[$col])){
            return $resrow[$col];
        }
    }
    return "unknown";
}

function db_fetch_row($rs)
{
	return mysqli_fetch_row($rs);
}

function db_fetch_array($rs)
{
	return mysqli_fetch_array($rs,MYSQLI_BOTH);
}

function db_insert_id()
{
	return mysqli_insert_id();
}

function db_num_rows($rs)
{
	return mysqli_num_rows($rs);
}

function db_field_name($rs, $kol)
{
	return mysqli_field_name($rs, $kol);
}

function db_num_fields($rs)
{
	return mysqli_num_fields($rs);
}

function db_export()
{
	global $db_user, $db_pass, $db_dbase;

	$descriptorspec = array(
	   0 => array("pipe", "r"),  // stdin is a pipe that the child will read from
	   1 => array("pipe", "w"),  // stdout is a pipe that the child will write to
	   2 => array("file", "/tmp/error-output.txt", "a") // stderr is a file to write to
	);
	// $pipes now looks like this:
	// 0 => writeable handle connected to child stdin
	// 1 => readable handle connected to child stdout
	// Any error output will be appended to /tmp/error-output.txt

	$response = "";
	$command = "mysqldump --user=".$db_user." --password=".$db_pass." --allow-keywords --complete-insert --extended-insert --databases ".$db_dbase."";
	$process = proc_open($command,$descriptorspec,$pipes);

	if (is_resource($process)){
		while (!feof($pipes[1])){
			$response .= fgets($pipes[1], 1024);
		}
		fflush($pipes[1]);
	}

	fclose($pipes[0]);
	fclose($pipes[1]);
	proc_close($process);

	return $response;
}
?>