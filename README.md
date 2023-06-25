# 🍽️ WDT Mobile Challenge_React Native

<div align='center'>
<p><strong><mark>Latest version</mark></strong></p>
<video width='200' autoplay loop controls>
<source src="assets/restaurants_app_updated.mp4" type='video/mp4'>
</video>
<p><strong>First version</strong></p><img width='200' src="assets/restaurants_app.gif">
</div>
## Tasks 📋

### - **1. List restaurants** ✅

- [x] The initial app screen should display a list of restaurants (like Uber Eats, iFood and similar apps) populated from this endpoint: https://api.dev.wdtek.xyz/restaurants
- [x] The list should be paginated (infinite scroll). The endpoint accepts the query params `offset` and `limit` to help you with the pagination.
- [x] Keep the design simple - showing the restaurant's image and name should be enough here.
- [x] Used Skeleton when the API request started.

### - **2. Search Restaurant** ✅

- [x] Implementar um componente de busca para os restaurantes
- [x] A busca é iniciada ao ser digitado o terceiro carácter do nome do restaurante no campo Search.
- [x] Implementado a função para limpar o campo após a busca e ao clicar no X, retornando assim a lista de todos os restaurantes.

### - **3. Restaurant details** ✅

- [x] When a user presses on a restaurant row, the app should open a new screen displaying the selected restaurant information: https://api.dev.wdtek.xyz/restaurants/{_id} (example \_id: `5ea88c9fce27ef5586174f57`)
- [x] The details screen should present: restaurant's image, name, address, contacts and cuisines.

### - **4. Favorite restaurants - Task Not Done** ⚠️🚫

_We would like you to add a "favorites" feature to the app. The requirements are:_

- [ ] A user can mark "star" restaurants as favorites both from the list and details page for all items.
- [ ] The user is able to unfavorite restaurants from the list and from the details page.
- [ ] The list is persisted after the app is closed (but everything is stored locally for now).

## Libs Used 📚

- **Navigation** ✅
  - [x] [**React Navigation - Stack Navigation**](https://github.com/react-navigation/react-navigation)
- **Component Style** ✅
  - [x] [**React Native Paper**](https://github.com/react-navigation/react-navigation)

## Author

Made with ❤️ by [Diego Girão](https://github.com/Diego-Girao)

I used notion to notes ideas, suggestions and a few tests.
[Notion - WDT](https://destiny-power-2f9.notion.site/WDT-Mobile-Challenge_React-Native-2588556dafb24ae6a6ad5ebdf70cd06f)

<!-- ```markdown
# Wedigitek React Native Challenge

You are free to use any libraries that you feel needed to complete the following tasks, but we will highly value the usage of:
- [Redux](https://github.com/reduxjs/redux)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [React Navigation](https://github.com/react-navigation/react-navigation)

## Tasks

### **1. List restaurants - Task Done**

- [x] The initial app screen should display a list of restaurants (like Uber Eats, iFood and similar apps) populated from this endpoint: https://api.dev.wdtek.xyz/restaurants
- [x] The list should be paginated (infinite scroll). The endpoint accepts the query params `offset` and `limit` to help you with the pagination.
- [x] Keep the design simple - showing the restaurant's image and name should be enough here.

### **2. Restaurant details - Task Done**

- [x] When a user presses on a restaurant row, the app should open a new screen displaying the selected restaurant information: https://api.dev.wdtek.xyz/restaurants/{_id} (example _id: `5ea88c9fce27ef5586174f57`)
- [x] The details screen should present: restaurant's image, name, address, contacts and cuisines.

### **3. Favorite restaurants - Task Not Done**

We would like you to add a "favorites" feature to the app. The requirements are:

- [ ] A user can mark "star" restaurants as favorites both from the list and details page for all items.
- [ ] The user is able to unfavorite restaurants from the list and from the details page.
- [ ] The list is persisted after the app is closed (but everything is stored locally for now).

## Practicalities

When you're ready to submit your challenge, share the link to your repo with us.
If you prefer to keep it private, we will provide you with some emails to invite
to the repo.

We're excited to have you take on this challenge and looking forward to seeing
your solution.

Happy coding!
``` -->
