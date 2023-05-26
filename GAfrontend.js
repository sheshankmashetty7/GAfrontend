import React, { useState } from "react";
import { ChakraProvider, extendBaseTheme, Skeleton } from "@chakra-ui/react";

const App = () => {
const [isLoading, setIsLoading] = useState(true);

const handleClick = () => {
setIsLoading(false);
};

return (
<ChakraProvider>
<div>
<h1>My Homepage</h1>
<section>
<h2>Section 1</h2>
<Skeleton variant="rect" />
</section>
<section>
<h2>Section 2</h2>
<Skeleton variant="rect" />
</section>
<section>
<h2>Section 3</h2>
<Skeleton variant="rect" />
</section>
<button onClick={handleClick}>Click here to load the content</button>
</div>
</ChakraProvider>
);
};

const extendBaseTheme = (theme) => {
return {
...theme,
colors: {
primary: "#000",
secondary: "#fff",
},
};
};

export default App;
