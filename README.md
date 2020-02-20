# Convert-json-data-to-a-html-template
Iterate through the json data use JavaScript(JS) and auto-generated the JavaScript loop rows by your custom html template, just add simple data attribute. 

### Features

+ HTML 直接加上宣告標籤，而不用使用傳統複雜的 JS 字串組裝方式，
+ 樣板的區域標籤加上 render-area 的 data 屬性
+ 在需要控制迴圈的區域標籤加上 render-action="loop" 的 data 屬性
+ 樣板內變數外層加上 {!變數!}} 資料就會自動渲染

####HTML Template Code

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

#### Online Demo:
https://jsfiddle.net/6r2f5Lut/

