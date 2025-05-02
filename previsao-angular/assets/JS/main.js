//Definindo itens da url para o fetch.
const apikey = "4d29db6eded5ce8c3e01b1e52e5e6cb4";
const lang = "pt_br";
const units = "metric";

const app = angular.module("weatherApp", []);

app.controller("WeatherController", function ($scope, $http) {
  $scope.cityName = ""
  $scope.city = "";
  $scope.cardActive = false;
  $scope.temperature = "";
  $scope.feelsLike = "";
  $scope.minTemperature = "";
  $scope.maxTemperature = "";
  $scope.humidity = "";
  $scope.windVelocity = "";
  $scope.windOrientation = "";
  $scope.iconUrl = ""

  $scope.callApi = async () => {
    const city = $scope.city|| localStorage.getItem("cityName") || "São Paulo";

    const response = await $http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}&lang=${lang}`
    );

    const {data} = response

    const icon = data.weather[0].icon;

    $scope.iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    $scope.temperature = Math.round(data.main.temp);
    $scope.feelsLike = Math.round(data.main.feels_like);
    $scope.minTemperature = Math.round(data.main.temp_min);
    $scope.maxTemperature = Math.round(data.main.temp_max);
    $scope.humidity = data.main.humidity.toLocaleString();
    $scope.windVelocity = data.wind.speed.toLocaleString();
    $scope.windOrientation = data.wind.deg;
    $scope.cardActive = true;
    $scope.cityName = data.name;
    localStorage.setItem('cityName', data.name)
    $scope.$apply()
  };

  $scope.callApi();

  const inputEl = document.getElementById('inputEl');
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      $scope.callApi();
    }
  });
});
