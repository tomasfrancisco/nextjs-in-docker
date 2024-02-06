"use server";

export async function testAction() {
  console.log("Test action");

  return {
    value: "Test action success!",
  };
}
