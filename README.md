# Convert-json-data-to-a-html-template (Pure JS)
Iterate through the json data use JavaScript(JS) and auto-generated the JavaScript loop rows by your custom html template, just add simple data attribute. 

### Features

You have a html table, you want to auto-generated the JavaScript loop rows by  custom html template.
+ HTML 直接加上宣告標籤，而不用使用傳統複雜的 JS 字串組裝方式，
+ 樣板的區域標籤加上 render-area 的 data 屬性
+ 在需要控制迴圈的區域標籤加上 render-action="loop" 的 data 屬性
+ 樣板內變數外層加上 {!變數!}} 資料就會自動渲染
+ 可自訂無資料時顯示樣式(render-data="data", render-data="nodata")


#### HTML Template Code
```html

<table render-area="template_1">
    <thead>
        <tr>
            <th class="">統一編號</th>
            <th class="text-center">機關單位名稱</th>
            <th class="text-center">經緯度</th>
        </tr>
    </thead>
    <tbody render-action="loop"><!-- 迴圈部分 -->
        <tr>
            <td>{!統一編號!}</td>
            <td>{!機關單位名稱!}</td>
            <td>{!經緯度!}</td>
        </tr>
    </tbody>
</table>
```

Or

```html
<table render-area="template_2">
    <thead>
        <tr>
            <th class="">統一編號</th>
            <th class="text-center">機關單位名稱</th>
            <th class="text-center">經緯度</th>
        </tr>
    </thead>
    <tbody render-action="loop"><!-- 迴圈部分 -->
        <!-- 呈現資料-->
        <tr render-data="data">
            <td>{!統一編號!}</td>
            <td>{!機關單位名稱!}</td>
            <td>{!經緯度!}</td>
        </tr>
        <!-- 無資料-->
        <tr render-data="nodata">
            <td colspan="4">沒有資料</td>
        </tr>
    </tbody>
</table>
```
You have outer json data like this:

#### Data 
```
var data = [
    {"統一編號": "03732303", "機關單位名稱": "財政部", "經緯度": "120.1,22.1"},
    {"統一編號": "04192705", "機關單位名稱": "財政部國庫署", "經緯度": "120.2,22.2"},
    {"統一編號": "17881751", "機關單位名稱": "國家教育研究院", "經緯度": "120.3,22.3"},
];

var data2 = []; //empty
```
Just use:
#### JavaScript 
```
loopDataTemplateRender(data, 'template_1');
loopDataTemplateRender(data2, 'template_2');
```

And you can get it.
#### Output result 
```
<table>
    <thead>
        <tr>
            <th class="">統一編號</th>
            <th class="text-center">機關單位名稱</th>
            <th class="text-center">經緯度</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>03732303</td>
            <td>財政部</td>
            <td>120.1,22.1</td>
        </tr>
        <tr>
            <td>04192705</td>
            <td>財政部國庫署</td>
            <td>120.2,22.2</td>
        </tr>
        <tr>
            <td>17881751</td>
            <td>國家教育研究院</td>
            <td>120.3,22.3</td>
        </tr>
    </tbody>
</table>
```


#### Online Demo:
https://jsfiddle.net/xvy29q5p/  
https://jsfiddle.net/6r2f5Lut/
