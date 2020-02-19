
/**
 * 將資料動態布置至樣板 v2.0
 * 2020.02.19 Jwu
 *
 * @param {string} data 數據
 * @param {string} tableTemplate 主樣板
 * @return {string}
 */
function loopDataTemplateRender(data, renderTemplate) {

    var template = document.querySelector('[render-area="' + renderTemplate + '"]');
    var loopElm = template.querySelector('[render-action="loop"]');
    if( (template || null != template) && loopElm){
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
    }
}
