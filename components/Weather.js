import Head from 'next/head'
import React from 'react'

const Weater = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="he-plugin-simple"></div>
    <script>
        WIDGET = {
            CONFIG: {
                "modules": "01234",
                "background": 1,
                "tmpColor": "FFFFFF",
                "tmpSize": "16",
                "cityColor": "FFFFFF",
                "citySize": "16",
                "aqiSize": 16,
                "weatherIconSize": "24",
                "alertIconSize": "14",
                "padding": "5px 5px 5px 5px",
                "shadow": "1",
                "language": "auto",
                "borderRadius": 5,
                "fixed": "false",
                "vertical": "middle",
                "horizontal": "center",
                "key": "521302b8f09a4d23ab9d44d4d4f3053d"
            }
        }
    </script>
    <script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>
</body>

</html>
`;

export default () => {
    return (
        <div >
            <iframe width="287" scrolling="no" height="50" frameBorder="0" allowtransparency="true" srcDoc={Weater}></iframe>
        </div>

    )
}


