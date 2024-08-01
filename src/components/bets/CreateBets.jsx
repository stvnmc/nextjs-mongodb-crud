"use client";
import { useBet } from "@/context/BetContext";
import React from "react";

const CreateBets = () => {
  //Context
  const { addBetFireStore } = useBet();

  const onSubmit = async (e) => {
    e.preventDefault();

    await addBetFireStore(
      e.target.name.value,
      e.target.description.value,
      e.target.date.value
    );
  };
  return (
    <div>
      <h1>create dets</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" placeholder="name" type="texto" />

        <label htmlFor="description">Description</label>
        <input id="description" placeholder="Description" type="texto" />

        <label htmlFor="date">Name</label>
        <input id="date" type="date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBets;
