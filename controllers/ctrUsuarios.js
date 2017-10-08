app.controller("ctrUsuarios", function ($scope, $http) {
        $scope.nombre = "Pablo";
        $scope.direccion = "ADC";
        var edad = 27;
        $scope.objUsuarios = {};
        $scope.objUsuarios.nombre = "";
        $scope.objUsuarios.direccion = "";
        $scope.objUsuarios.edad = "";
        $scope.lstUsuarios ="";
    
        function obtenerInformacion() {
            console.log($scope.objUsuarios);
        }
        $scope.obtenerInformacion = function () {
            console.log($scope.objUsuarios);
        }
    
        $scope.obtenerListaUsuarios = function () {
            $http.get("./json/usuarios.json").success(function (res) {
                $scope.lstUsuarios = res;
            });
        }
        $scope.obtenerListaUsuarios();
    
    });