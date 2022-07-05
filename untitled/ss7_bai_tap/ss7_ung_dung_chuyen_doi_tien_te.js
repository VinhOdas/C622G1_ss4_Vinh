function DoiTien() {
    var SoLuong = document.getElementById("SoLuong");
    var tu = document.getElementById("tu");
    var den = document.getElementById("den");
    var KetQua;
    if (tu == "USD" && den == "VND") {
        KetQua = KetQua + (SoLuong * 23000) + " Đ";
    } else if (tu == "VND" && den == "USD") {
        KetQua = KetQua + (SoLuong / 23000) + "Đ";
    } else if (tu == "VND") {
        KetQua = KetQua + SoLuong + " đ"
    } else {
        KetQua = KetQua + SoLuong + " $"
    }
    document.getElementById("KetQua").innerHTML= KetQua;

}

