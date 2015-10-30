/**
 * 整个body区域都导出到Word
 */
function allToWord(){
	var word = new ActiveXObject("Word.Application");
	var wordDoc = word.Documents.Add("", 0, 1);
	
	var range = wordDoc.Range(0,1);
	var sel = document.body.createTextRange();
	sel.moveToElementText(all);//这里指定导出哪个元素
	sel.select();
	sel.execCommand("Copy");
	range.Paste();
	word.Application.Visible = true;
}

/**
 * 导出第一首诗到Excel，包括格式
 */
function allToExcel(){
	var excel = new ActiveXObject("Excel.Application");
	var excelDoc = excel.Workbooks.Add();
	var sheet = excelDoc.ActiveSheet;
	
	var sel = document.body.createTextRange();
	sel.moveToElementText(PoeamA);
	sel.select();
	sel.execCommand("Copy");
	sheet.Paste();
	excel.Visible = true;
}

/**
 * 只导出第一首诗的内容，不包括格式
 */
function dataToExcel(){
	var excel = new ActiveXObject("Excel.Application");
	var excelDoc = excel.Workbooks.Add();
	var sheet = excelDoc.ActiveSheet;
	var rows = PoeamA.rows.length;
	for (i = 0; i < rows; i++) {
		var cols = PoeamA.rows(i).cells.length;
		for (j = 0; j < cols; j++) {
			sheet.Cells(i + 1, j + 1).value = PoeamA.rows(i).cells(j).innerText;
		}
	}
	excel.Visible = true;
}