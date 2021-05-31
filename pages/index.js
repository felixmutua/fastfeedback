import {useAuth} from '../lib/auth'
import {Button, Code, Heading, Text} from "@chakra-ui/react";

const Home = () => {
    const auth = useAuth();
    return (
        <div>
            <Heading>
                <title>Fast Feedback</title>
            </Heading>
            <main>
                <Heading>
                    Fast Feedback
                </Heading>
                <Text>
                    Current User : <Code>{auth.user ? auth.user.email : 'None'}</Code>
                </Text>
                {
                    auth.user ? (<Button onClick={(e) => auth.signout()}>Sign out</Button>
                    ) : (
                        <Button onClick={(e) => auth.signInWithGithub()}>Sign In</Button>)
                }
            </main>
        </div>
    );
}
export default Home;
