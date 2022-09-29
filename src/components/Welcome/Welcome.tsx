import { Text, Title } from '@mantine/core';
import useStyles from './Welcome.styles';

const Welcome = () => {
    const { classes } = useStyles();

    return (
        <Title className={classes.title} align='center' mt={100} aria-label='title'>
            Welcome to{' '}
            <Text inherit variant='gradient' component='span'>
                Mantine
            </Text>
        </Title>
    );
};

export default Welcome;