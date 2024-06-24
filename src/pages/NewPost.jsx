import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, date: new Date().toISOString() };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    toast({
      title: "Post created.",
      description: "Your new blog post has been created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTitle("");
    setContent("");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Create New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;