
/*Login*/
function checkuser(){
	if(document.getElementById('txtUser').value!="admin"){
		alert('Tên tài khoản không đúng!');
		return false;
	}
	return true;
}		   
function checkpass() {
		if(document.getElementById('txtPass').value!='123456')
		{
			alert('Mật khẩu không đúng!');
			return false;
		}
		return true;
}
function LoginF(){
	if(checkuser()==true && checkpass()==true){
		alert('Đăng nhập thành công!');
		document.getElementById('gly01').style.display="none";
		document.getElementById('gly02').style.display="none";
		document.getElementById('gly03').style.display="block";
		document.getElementById('gly04').style.display="block";
		$('#Login').modal('hide');
	}
}

function LogoutF(){
	alert('Đăng xuất thành công!');
	document.getElementById('gly03').style.display="none";
	document.getElementById('gly04').style.display="none";
	document.getElementById('gly01').style.display="block";
	document.getElementById('gly02').style.display="block";
}

$(document).ready(function () {
    var i = 1;
    $("#DK").click(function () {
        $("#dangky").modal();
    });

    //kiem tra tên đăng nhập
        function ktten() {
            var re = /^[a-z0-9]{6,16}$/;
            if ($("#txtname").val() == "") {
                $("#ername").html("* bắt buộc nhập");
                return false;
            }
            if (!re.test($("#txtname").val())) {
                $("#ername").html("* Tên đăng nhập theo mẫu: aaaa000 or aaaaaaa");
                return false;
            }
            $("#ername").html("*");
            return true;
        }
        $("#txtname").blur(ktten);

        //kiem tra mat khau
        function ktmk() {
            var re = /^[a-z0-9]{6,16}$/;
            if ($("#txtmk").val() == "") {
                $("#ermk").html("* bắt buộc nhập");
                return false;
            }
            if (!re.test($("#txtmk").val())) {
                $("#ermk").html("* mật khẩu phải gồm số và tên, từ 0-16 ký tự :abc012dcf1");
                return false;
            }
            $("#ermk").html("*");
            return true;
        }
        $("#txtmk").blur(ktmk);

        //kiem tra lai mat khau
        function ktmklai() {
            if (document.getElementById("txtmk2").value !=
				document.getElementById("txtmk").value) {
                $("ermk").html("Phải giống ô mật khẩu! Vui lòng nhập lại");
                return false;
            }
            else {
                ("ermk").html("");
                return true;;
            }
        }

        //kiem tra họ và tên
        function kthoten() {
            var re = /^[A-Z]+[A-Za-z]*((\s)*[A-Z]+[A-Za-z]*)*$/;
            if ($("#txthoten").val() == "") {
                $("#tbhoten").html("* bắt buộc nhập");
                return false;
            }
            if (!re.test($("#txthoten").val())) {
                $("#tbhoten").html("* Họ và tên theo mẫu: Nguyen Van A or Le Van B");
                return false;
            }
            $("#tbhoten").html("*");
            return true;
        }
        $("#txthoten").blur(kthoten);

        //kiem tra ngay sinh
        function ktngaysinh() {
            var ns = document.getElementById("txtdate").value;
            var datens = new Date(ns);
            var datechuan = new Date();
            var t = datechuan.getFullYear() - datens.getFullYear();

            if (t < 16 || ns == "") {
                document.getElementById("erdate").innerHTML = "Tuổi phải trên 16!!!";
                return false;
            }
            else {
                document.getElementById("erdate").innerHTML = "*";
                return true;
            }
        }
        $("#txtdate").blur(ktngaysinh);

        //kiem tra dia chi
        function ktdiachi() {
            var re = /^([0-9]+(\s))+((\s)*[a-z]*)*$/
            if ($("#txtdiachi").val() == "") {
                $("#tbdiachi").html("* bắt buộc nhập");
                return false;
            }
            if (!re.test($("#txtdiachi").val())) {
                $("#tbdiachi").html("* Địa chỉ phải gồm số nhà và tên đường/quận/huyện và tỉnh (89 nguyen van nghi tphcm)!");
                return false;
            }
            $("#tbdiachi").html("*");
            return true;
        }
        $("#txtdiachi").blur(ktdiachi);

        //kiem tra so dien thoai
        function ktsdt() {
            var re = /((09|03|07|08|05)+([0-9]{8})\b)/
            if ($("#txtphone").val() == "") {
                $("#tbphone").html("* bắt buộc nhập");
                return false;
            }
            if (!re.test($("#txtphone").val())) {
                $("#tbphone").html("* số điện thoại không hợp lệ!!!");
                return false;
            }
            $("#tbphone").html("*");
            return true;
        }
        $("#txtphone").blur(ktsdt);

        //kiem tra email
        function ktemail() {
            var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            if ($("#txtemail").val() == "") {
                $("#tbemail").html("* bắt buộc nhập");
                return false;
            }
            if (!re.test($("#txtemail").val())) {
                $("#tbemail").html("* Email không hợp lệ!!!");
                return false;
            }
            $("#tbemail").html("*");
            return true;
        }
        $("#txtemail").blur(ktemail);

        //Luu thong tin dang ky
        function save()
        {
            // kiem tra tat ca du lieu dung moi cho them vao bang
            if(!ktten()||!ktmk()||!ktmklai()||!kthoten()||!ktngaysinh()||!ktdiachi()||!ktsdt()||!ktemail()) {
                $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
                return false;
            } else {
                alert('Đăng ký thành công!');
                return true;
            }
         }    
});
