<?
/*
 * © Joris 'DacoTaco' Vermeylen
 *   daco_65@hotmail.com
*/


session_start();
ob_start();

include_once("lib_dbase.php");
header('Content-Type: application/json');

class category 
{
    public $Id;
    public $Description;
}

class entry
{
	public $Name;
	public $BoxName;
	public $InfoUrl;
	public $Available;
	public $Remarks;
}

function ParseCategoriesCall($categories)
{
	$list = [];
	if(!isset($_GET['categories']))
		return json_encode($list);

	$sql = "SELECT ListCategoryId, Name FROM ListCategories ORDER BY ListOrder ASC";
	$res = db_query($sql);
	while ($row = db_fetch_array($res))
	{
		$item = new category();
		$item->Id = $row['ListCategoryId'];
		$item->Description = $row['Name'];
		$list[] = $item;
	}
	return json_encode($list);
}

function ParseListCall($categories)
{
	$list = [];
	if(!isset($_GET['list']) || $_GET['list'] <= 0)
		return json_encode($list);
	
	$sql = "SELECT Name, BoxName, InfoUrl, Available, Remarks FROM List WHERE ListCategory = \"".$_GET['list']."\" ORDER BY Name ASC, BoxName ASC";
	$res = db_query($sql);

	while ($row = db_fetch_array($res))
	{
		$item = new entry();
		$item->Name = $row['Name'];
		$item->BoxName = $row['BoxName'];
		$item->InfoUrl = $row['InfoUrl'];
		$item->Available = $row['Available'];
		$item->Remarks = $row['Remarks'];
		$list[] = $item;
	}
	
	return json_encode($list);
}

$response = "";
/* Actual Call Parsing */
if(isset($_GET['categories']))
	$response = ParseCategoriesCall($_GET['categories']);
else if(isset($_GET['list']) && $_GET['list'] > 0)
	$response = ParseListCall($_GET['list']);

echo $response;