"use client";
import React, { useEffect } from "react";
import { auth } from "@/auth";
import { Box } from "@chakra-ui/react";
import { GetSession } from "@/utils/session";

const TestingPage = () => {
  const [session, setSession] = React.useState<any>();

  const getSession = async () => {
    const session = await GetSession();
    return session;
  };

  useEffect(() => {
    getSession().then((data) => setSession(data));
  }, []);

  return (
    <Box padding={"24"}>
      TestingPage
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Box>
  );
};

export default TestingPage;
