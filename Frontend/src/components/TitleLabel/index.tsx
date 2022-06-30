import React from "react";
import { ArrowBack, GridTitle, Title } from "./styles";
import { MaterialIcon } from "../../components/Icon";
import { useNavigation } from "@react-navigation/native";

interface props {
  text: string;
  onPress: any;
}

export function TitleLabel(props: any) {
  const navigator = useNavigation();
  return (
    <GridTitle>
      <ArrowBack onPress={navigator.goBack}>
        <MaterialIcon size="large" color="#d8f0ed" name="arrow-left" />
      </ArrowBack>
      <Title>{props.title}</Title>
    </GridTitle>
  );
}

export default TitleLabel;
