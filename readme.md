How it works

The plugin is used for catching user's location via his IP address. Features include the possibility to manually edit the default location with a mouse click. 

How to list a plugin

Html document should include:
 - ```html <div> ``` tag with a unique id, where you bind a plugin 
 - ```html <a> ``` tag with the name of the default location
 - ```html <span> ``` tag with the edit logo 


Development

Requires

 - jQuery 3.0.0
 - Jquery-ui.min.js
 - Jquery-ui.css

Include the link to jquery.editableText.js in your html file, initiate the plugin in you js file (i.e. $('#edit').editableText()) and enjoy!

Example of usage

- HTML
```html
<div id="edit">
    <a>Loading... </a>
    <span> <img id="icon" src="path-to-your-image"/>
    </span>
</div>
```

- JS
```html 
$('#edit').editableText()
```

- CSS 
```html

//Not necessary. You can customize the elements as you wish

#edit {
   text-align: center;
    font-size: 27px;
    color: #eefeff;
}


#icon {
    width: 30px;
    height: 30px;

}

input[type="text"] {
    padding: 10px;
    border: solid 1px #dcdcdc;
    transition: box-shadow 0.3s, border 0.3s;
}
input[type="text"]:focus,
input[type="text"].focus {
    border: solid 1px #707070;
    box-shadow: 0 0 5px 1px #969696;
}

button {
    width:50px; /*same as the height*/
    height:50px; /*same as the width*/
    background-color:#ff0000;
    border:1px solid #ff0000; /*same colour as the background*/
    color:#fff;
    font-size:10px;
    /*set the border-radius at half the size of the width and height*/
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    /*give the button a small drop shadow*/
    -webkit-box-shadow: 0 0 10px rgba(0,0,0, .75);
    -moz-box-shadow: 0 0 10px rgba(0,0,0, .75);
    box-shadow: 2px 2px 15px rgba(0,0,0, .75);
}
/***NOW STYLE THE BUTTON'S HOVER STATE***/
button:hover{
    background:#c20b0b;
    border:1px solid #c20b0b;
    /*reduce the size of the shadow to give a pushed effect*/
    -webkit-box-shadow: 0px 0px 5px rgba(0,0,0, .75);
    -moz-box-shadow: 0px 0px 5px rgba(0,0,0, .75);
    box-shadow: 0px 0px 5px rgba(0,0,0, .75);
}

```






