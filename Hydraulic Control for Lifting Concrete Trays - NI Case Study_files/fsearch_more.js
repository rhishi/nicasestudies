/***********************************************
* Switch Content script- © Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use. Last updated April 2nd, 2005.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

function changeit(id)
{
//	document.getElementById(id).innerHTML = "Contract";
	document.getElementById(id).style.display = "none";
}

var enablepersist="off" //Enable saving state of content structure using session cookies? (on/off)
var collapseprevious="no" //Collapse previously open content when opening present? (yes/no)

/* Determines lang value */
var contentLocale = document.getElementsByTagName("html")[0].lang;
var callmelang = 'en';
var globalLocale = (contentLocale != 'undefined') ? contentLocale : callmelang;

if (globalLocale.substring(0,2)=="zh")	/* If Locale Is Chinese, Correct for NI Global Gateway to Set NI Locale */
{
	if (contentLocale == "zh-CN") globalLocale = "zh-CN";
	if (contentLocale == "zh-TW") globalLocale = "zh-TW";
}
else
{
	contentLocale = contentLocale.substring(0,2);	/* Otherwise Need Only Two-Letter Language Code From Locale to Set NILocale */
	globalLocale = contentLocale;
}

var contractsymbol='Hide Additional Categories ' //HTML for contract symbol. For image, use: <img src="whatever.gif">
var expandsymbol='Browse Additional Categories ' //HTML for expand symbol.

if (globalLocale == 'en') {contractsymbol = 'Hide Additional Categories '; expandsymbol = 'Browse Additional Categories '}
if (globalLocale == 'fr') {contractsymbol = 'Cacher les catégories supplémentaires '; expandsymbol = 'Naviguer dans d\'autres catégories '}
if (globalLocale == 'zh-CN') {contractsymbol = '隐藏其它类别'; expandsymbol = '浏览更多其它类别'}
if (globalLocale == 'es') {contractsymbol = 'Ocultar Categorías Adicionales '; expandsymbol = 'Buscar Categorías Adicionales '}
if (globalLocale == 'zh-TW') {contractsymbol = '隱藏搜尋條件 '; expandsymbol = '瀏覽更多搜尋條件'}
if (globalLocale == 'de') {contractsymbol = 'Zusätzliche Kategorien ausblenden '; expandsymbol = 'Zusätzliche Kategorien durchsuchen '}
if (globalLocale == 'ko') {contractsymbol = '추가 카테고리 숨기기'; expandsymbol = '추가 카테고리 보기'}
if (globalLocale == 'ja') {contractsymbol = '他のカテゴリを非表示にする'; expandsymbol = '他のカテゴリを検索'}
if (globalLocale == 'it') {contractsymbol = 'Nascondi le categorie aggiuntive'; expandsymbol = 'Cerca fra le categorie aggiuntive'}

if (document.getElementById){
document.write('<style type="text/css">')
document.write('.switchcontent{display:none;}')
document.write('</style>')
}

function getElementbyClass(rootobj, classname){
var temparray=new Array()
var inc=0
for (i=0; i<rootobj.length; i++){
if (rootobj[i].className==classname)
temparray[inc++]=rootobj[i]
}
return temparray
}

function sweeptoggle(ec){
var thestate=(ec=="expand")? "block" : "none"
var inc=0
while (ccollect[inc]){
ccollect[inc].style.display=thestate
inc++
}
revivestatus()
}


function contractcontent(omit){
var inc=0
while (ccollect[inc]){
if (ccollect[inc].id!=omit)
ccollect[inc].style.display="none"
inc++
}
}

function expandcontent(curobj, cid){
var spantags=curobj.getElementsByTagName("SPAN")
var showstateobj=getElementbyClass(spantags, "showstate")
if (ccollect.length>0){
if (collapseprevious=="yes")
contractcontent(cid)
document.getElementById(cid).style.display=(document.getElementById(cid).style.display!="block")? "block" : "none"
if (showstateobj.length>0){ //if "showstate" span exists in header
if (collapseprevious=="no")
showstateobj[0].innerHTML=(document.getElementById(cid).style.display=="block")? contractsymbol : expandsymbol
else
revivestatus()
}
}
}

function revivecontent(){
contractcontent("omitnothing")
selectedItem=getselectedItem()
selectedComponents=selectedItem.split("|")
for (i=0; i<selectedComponents.length-1; i++)
document.getElementById(selectedComponents[i]).style.display="block"
}

function revivestatus(){
var inc=0
while (statecollect[inc]){
if (ccollect[inc].style.display=="block")
statecollect[inc].innerHTML=contractsymbol
else
statecollect[inc].innerHTML=expandsymbol
inc++
}
}

function get_cookie(Name) { 
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { 
offset += search.length
end = document.cookie.indexOf(";", offset);
if (end == -1) end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}

function getselectedItem(){
if (get_cookie(window.location.pathname) != ""){
selectedItem=get_cookie(window.location.pathname)
return selectedItem
}
else
return ""
}

function saveswitchstate(){
var inc=0, selectedItem=""
while (ccollect[inc]){
if (ccollect[inc].style.display=="block")
selectedItem+=ccollect[inc].id+"|"
inc++
}

document.cookie=window.location.pathname+"="+selectedItem
}

function do_onload(){
uniqueidn=window.location.pathname+"firsttimeload"
var alltags=document.all? document.all : document.getElementsByTagName("*")
ccollect=getElementbyClass(alltags, "switchcontent")
statecollect=getElementbyClass(alltags, "showstate")
if (enablepersist=="on" && ccollect.length>0){
document.cookie=(get_cookie(uniqueidn)=="")? uniqueidn+"=1" : uniqueidn+"=0" 
firsttimeload=(get_cookie(uniqueidn)==1)? 1 : 0 //check if this is 1st page load
if (!firsttimeload)
revivecontent()
}
if (ccollect.length>0 && statecollect.length>0)
revivestatus()
}

if (window.addEventListener)
window.addEventListener("load", do_onload, false)
else if (window.attachEvent)
window.attachEvent("onload", do_onload)
else if (document.getElementById)
window.onload=do_onload
//Please put if else statements with curly brackets. Thanks
if (enablepersist=="on" && document.getElementById)
{
    window.onunload=saveswitchstate
}

jQuery(function(){
  doThHover();
});

function replaceStyling()
{
	//create the border-right on each th element except for the last one
	var size = jQuery('#results-tabular th').size() -1;
	var group = jQuery('#results-tabular th:lt('+size+')');
	group.css({borderRight:'1px solid #F0F0F0'});
	doThHover();
	
	
}

function doThHover()
{
	//hover functionality for search VIEW AS TABLE
    jQuery('#results-tabular th').hover(function(){
        if(jQuery(this).hasClass('sort-neutral'))
        {
            jQuery(this).removeClass('sort-neutral').addClass('sort-hover');
        }
    },
    function(){
        if(jQuery(this).hasClass('sort-hover'))
        {
            jQuery(this).removeClass('sort-hover').addClass('sort-neutral');
        }
    });
}

