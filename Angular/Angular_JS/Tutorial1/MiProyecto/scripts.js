
function AlumnosController($scope) {
    $scope.alumnos = [{ "nombre": "Jossy", "telefono": "99735142", "curso": "tercero" },
    { "nombre": "Chemo", "telefono": "4343222", "curso": "Primero" },
    { "nombre": "nasser", "telefono": "1123323", "curso": "Segundo" }
    ];

    $scope.Save = function () {
        $scope.alumnos.push({
            nombre: $scope.nuevoAlumno.nombre,
            telefono: $scope.nuevoAlumno.telefono,
            curso: $scope.nuevoAlumno.curso
        });
        $scope.formVisibility = false;
    };

    $scope.formVisibility= false;

    $scope.ShowForm = function () {
        $scope.formVisibility = true;
        console.log($scope.formVisibility);
    };
}