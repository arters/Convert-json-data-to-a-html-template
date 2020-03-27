
/**
 * 將資料動態布置至樣板 v2.1
 * 2020.03.27 Jwu
 *
 * @param {string} data 數據
 * @param {string} tableTemplate 主樣板
 * @return {string}
 */
function loopDataTemplateRender(data, renderTemplate) {

    var template = document.querySelector('[render-area="' + renderTemplate + '"]');
    var loopElm = template.querySelector('[render-action="loop"]');
    _loopArea = loopElm;
    if( (template || null != template) && loopElm){
      if(Object.keys(data).length){
        var nodataElm = loopElm.querySelector('[render-data="nodata"]');
        if(nodataElm){
          nodataElm.style.display = 'none';
        }
        var keyRpStr;
        var WordRegEx;
        var loopAreaHtml = loopElm.innerHTML;
        loopElm.innerHTML = 'Loading...';
        var replaceRow = '';
        var loopStr = '';
        data.forEach(function(ditem) {
            replaceRow = loopAreaHtml;
            Object.keys(ditem).forEach(function(dataKey) {
                keyRpStr = '{!' + dataKey + '!}';
                WordRegEx = new RegExp(keyRpStr,'g');
                replaceRow = replaceRow.replace(WordRegEx, ditem[dataKey]);
                return false;//跳出 variableList 迴圈
            })
            loopStr += replaceRow;
        });
        loopElm.innerHTML = loopStr;
      }else{
        var dataElm = loopElm.querySelector('[render-data="data"]');
        if(dataElm){
          dataElm.style.display = 'none';
        }else{
          loopElm.childNodes[0].style.display = 'none';
        }
      }
    }
}
