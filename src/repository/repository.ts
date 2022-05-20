import axios from 'axios';
import { SetStateAction } from 'react';

const BEE_SERVICE_URL = 'http://localhost:1337';

export const getCurrentPuzzleId = async (setPuzzleId: {
  (value: SetStateAction<string>): void;
  (arg0: any): void;
}) => {
  const { data } = await axios.get(`${BEE_SERVICE_URL}/puzzles/current_puzzle`);

  setPuzzleId(data.puzzleId);
};

export const createScore = async ({
  userId,
  puzzleId,
}: {
  userId: string;
  puzzleId: string;
}) => {
  const { data } = await axios.post(`${BEE_SERVICE_URL}/scores`, {
    userId,
    puzzleId,
  });

  return data;
};

export const getScore = async ({
  userId,
  puzzleId,
}: {
  userId: string;
  puzzleId: string;
}) => {
  const { data } = await axios.get(`${BEE_SERVICE_URL}/scores`, {
    params: {
      userId,
      puzzleId,
    },
  });

  return data;
};

export const updateScore = async ({
  scoreId,
  userId,
  puzzleId,
  word,
}: {
  scoreId: string;
  userId: string;
  puzzleId: string;
  word: string;
}) => {
  const { data } = await axios.patch(`${BEE_SERVICE_URL}/scores/${scoreId}`, {
    userId,
    puzzleId,
    word,
  });

  return data;
};

export const validateWord = async (word: string, puzzleId: string) => {
  const { data } = await axios.post(
    `${BEE_SERVICE_URL}/puzzles/${puzzleId}/validate`,
    {
      params: {
        word,
      },
    }
  );
};
