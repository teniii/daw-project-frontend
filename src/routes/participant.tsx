import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react";
import MyBox from "../components/MyBox";
import { getParticipant, getParticipants } from "../api/mockApiCalls";
import { Participant } from "../data/participants";

interface MoviePageProps {
  participantId?: number;
}

const ParticipantPage: React.FC<MoviePageProps> = ({ participantId }) => {
  const [participants, setParticipants] = useState<Participant[]>();
  const [error, setError] = useState(false);
  useEffect(() => {
    participantId
      ? getParticipant(participantId)
          .then((result) => {
            if (result) {
              setParticipants([result]);
            } else {
              setError(true);
            }
          })
          .catch((err) =>
            console.log(" != Error while fetching the participant: ", err)
          )
      : getParticipants()
          .then((result) => setParticipants(result))
          .catch((err) =>
            console.log(" != Error while fetching the participants: ", err)
          );
  }, [participantId]);

  if (error) {
    return (
      <MyBox alignItems="center" justifyContent="center">
        <Heading> Something went wrong </Heading>
      </MyBox>
    );
  }

  if (!participants || participants?.length === 0) {
    return (
      <MyBox alignItems="center" justifyContent="center">
        <Heading> 404 Not found </Heading>
      </MyBox>
    );
  }

  const renderParticipant = (participant: Participant) => (
    <Flex
      direction="column"
      marginX="3rem"
      marginY="2rem"
      minWidth="20rem"
      alignItems="center"
      key={participant.id + "-" + participant.name}
      overflowX="auto"
    >
      <Heading alignSelf="center" marginBottom="1rem">
        {participant.role[0].toUpperCase()}
      </Heading>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Name:
        </Text>

        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={participant.name + " " + participant.surname}
        />
      </Flex>
      <Flex>
        <Text alignSelf="start" marginRight="0.5rem">
          Date of birth:
        </Text>
        <Text
          marginBottom="0.8rem"
          placeholder="First Name"
          children={participant.date_of_birth.toLocaleDateString()}
        />
      </Flex>
      <RouterLink to={"/"}>
        <Button
          marginY="0.5rem"
          width="30%"
          minWidth="6rem"
          value="Register"
          bg="green.200"
          alignSelf="center"
        >
          See more
        </Button>
      </RouterLink>
    </Flex>
  );

  return participants.length > 1 ? (
    <Flex
      alignSelf="center"
      justifyContent="space-evenly"
      display="flex"
      flexWrap="wrap"
    >
      {participants?.map((participant) => renderParticipant(participant))}
    </Flex>
  ) : (
    renderParticipant(participants[0])
  );
};

export default ParticipantPage;
