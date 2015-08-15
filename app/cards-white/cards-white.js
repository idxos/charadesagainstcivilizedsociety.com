


<ul>
  <li ng-repeat="card in cards">
    <!-- edit a message -->
    <input ng-model="card.text" ng-change="card.$save(card)" />
    <!-- delete a message -->
    <button ng-click="cards.$remove(card)">Delete Card</button>
  </li>
</ul>