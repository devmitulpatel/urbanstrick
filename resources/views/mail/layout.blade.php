<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <style>
        @media only screen and (max-width: 600px) {
            .inner-body {
                width: 100% !important;
            }

            .footer {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 500px) {
            .button {
                width: 100% !important;
            }
        }
    </style>
</head>
<body>

<table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
        <td align="center">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
                <td class="body" width="100%" cellpadding="0" cellspacing="0" style="text-align: center ">
                    <img src="{{asset('/img/logo/04_Homepage.png')}}" style="max-height: 60px;margin-bottom: 20px;margin-top: 10px">
                    <hr>
                </td>
            </tr>

            <!-- Email Body -->
                <tr>
                    <td class="body" width="100%" cellpadding="0" cellspacing="0" style="text-align: center">
                        <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                            <!-- Body content -->
                            <tr>
                                <td class="content-cell">
                                    @yield('content')
                                    <br>
                                   <p style="text-align: left">With Best regards,</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <td class="body content-cell" width="100%" cellpadding="0" cellspacing="0" style="text-align: left">

                    <hr>
                    <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                        <!-- Body content -->
                        <tr>
                            <td class="content-cell">

                                From
                                <br>

                                <span style="">Tech Team</span>,<img src="{{asset('/img/logo/04_Homepage.png')}}" style="margin-top:10px;max-height: 12px;">
                            </td>
                        </tr>
                    </table>

                </td>

            </table>
        </td>
    </tr>
</table>
</body>
</html>
