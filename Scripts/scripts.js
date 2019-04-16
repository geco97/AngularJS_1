angular.module("angularApp", [])
.controller("userController", function ($scope) {
    $scope.namelist = [
        { imagebook: "Media/Jacka/M3I21G048-B11@18.jpg", productname: "Bomberjacka",manufacturer: "Massimo Dutti", price: "1190", rating: 4 },
        { imagebook: "Media/Jacka/M3I21G04B-K11@31.jpg", productname: "Blazer",manufacturer: "Massimo Dutti", price: "1 699", rating: 4 },
        { imagebook: "Media/Jacka/M3I21G04C-B11@22.jpg", productname: "Blazer",manufacturer: "Massimo Dutti", price: "1 799", rating: 4 },
        { imagebook: "Media/Jacka/C2341F00J-J14@3.jpg", productname: "FLASH FORWARD - Vindjacka ",manufacturer: "Columbia", price: "599", rating: 4 },
        { imagebook: "Media/Jacka/M3I21G046-B11@14.jpg", productname: "Blazer",manufacturer: "Massimo Dutti", price: "1699", rating: 4 },
        { imagebook: "Media/Jacka/M3I21U063-O11@18.jpg", productname: "Tunn jacka",manufacturer: "Massimo Dutti", price: "999", rating: 4 },
        { imagebook: "Media/Jacka/NM321G04J-Q11@11.jpg", productname: "NMOLE JACKET - Jeansjacka ",manufacturer: "NOISY MAY", price: "399", rating: 4 },
        { imagebook: "Media/Jacka/NL021G07I-C11@8.jpg", productname: "CROP UTILITY - Tunn jacka ",manufacturer: "New Look", price: "299", rating: 4 },
        { imagebook: "Media/Jacka/K4421G02O-Q11@8859.1.jpg", productname: "Blazer",manufacturer: "KIOMI", price: "399", rating: 4 },
        { imagebook: "Media/Jacka/K4421G02P-Q11@13.2.jpg", productname: "Kort kappa / rock ",manufacturer: "KIOMI", price: "317", rating: 4 },
        { imagebook: "Media/Jacka/ON321U0AC-M11@16.jpg", productname: "ONLCANDICE UTILITY BELT JACKET - Jeansjacka ",manufacturer: "ONlY", price: "529", rating: 4 },
        { imagebook: "Media/Jacka/ON321G0RL-Q11@16.jpg", productname: "Jacka i konstläder ",manufacturer: "ONlY", price: "479", rating: 4 },
        { imagebook: "Media/Jacka/M3221G042-K11@7.jpg", productname: "Blazer",manufacturer: "mint&berry", price: "379", rating: 4 },
        { imagebook: "Media/Jacka/M9121G0Q3-C11@14.jpg", productname: "MALIA - Blazer ",manufacturer: "Mango", price: "799", rating: 4 },
        { imagebook: "Media/Jacka/LE221G02U-K11@3.jpg", productname: "EX BOYFRIEND TRUCKER - Jeansjacka ",manufacturer: "Levi's", price: "1097", rating: 4 },
        { imagebook: "Media/Jacka/C7641K00F-Q11@18.jpg", productname: "FULL ZIP SUIT - Träningsset",manufacturer: "Champion", price: "619", rating: 4 },
        { imagebook: "Media/Jacka/NI121G03H-Q11@3.jpg", productname: "Vindjacka ",manufacturer: "NIKE", price: "799", rating: 4 },
        { imagebook: "Media/Jacka/EL941F00E-K11@10.jpg", productname: "TANAS - Vindjacka ",manufacturer: "Ellesse", price: "474", rating: 4 },
        { imagebook: "Media/Jacka/NI121G03K-T11@10.jpg", productname: "Träningsjacka",manufacturer: "NIKE", price: "849", rating: 4 }
        
    ];
    for (var i = 0; i < $scope.namelist.length; i++) {
        if ($scope.namelist[i].rating > 0) {
            $scope[$scope.namelist[i].product] = [];
            for (var j = 0; j < $scope.namelist[i].rating; j++) {
                $scope[$scope.namelist[i].product].push({ j: '' });
            }
            $scope.namelist[i].rating = $scope[$scope.namelist[i].product];
        }
    }
    $(window).scroll(function() {
        let topPosition = $(this).scrollTop();
        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })
});