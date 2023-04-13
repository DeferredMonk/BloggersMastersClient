import { Box } from "@mui/system"
import React, { useContext, useState } from "react"
import Post from "../common/post/Post"
import PostsContext from "../../utils/PostContext"
import { Tab, Tabs } from "@mui/material"
import keycloak from "../../keycloak"
import { TabContext, TabPanel } from "@mui/lab"
import PostsList from "../common/post/PostsList"

const LandingPage = () => {
  const { posts, currUserPosts } = useContext(PostsContext)
  const [value, setValue] = useState("0")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={style}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="all posts" value="0" />
          {keycloak.authenticated && <Tab label="my posts" value="1" />}
        </Tabs>
        <TabPanel value="0" sx={tabStyle}>
          <PostsList posts={posts} />
        </TabPanel>
        <TabPanel value="1" sx={tabStyle}>
          <PostsList posts={currUserPosts} />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const tabStyle = {
  padding: 0,
}

export default LandingPage
