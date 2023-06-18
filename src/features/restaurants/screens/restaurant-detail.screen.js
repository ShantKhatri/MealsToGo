import React from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { useState } from "react";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreafastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreafastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Idli" />
          <List.Item title="Poha" />
          <List.Item title="Kachori" />
          <List.Item title="Dosa" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Chapati" />
          <List.Item title="Daal" />
          <List.Item title="Rice" />
          <List.Item title="Shahi Paneer" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Naan" />
          <List.Item title="Jeera Rice" />
          <List.Item title="Daal Fry" />
          <List.Item title="Kadhai Paneer" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Tea" />
          <List.Item title="Coffee" />
          <List.Item title="Chhachh" />
          <List.Item title="Lassi" />
          <List.Item title="Dohi" />
          <List.Item title="Cola" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
