import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome component', () => {
    it('has "Welcome to Mantine" in the title', () => {
        render(<Welcome />);
        expect(screen.getByLabelText('title')).toHaveTextContent('Welcome to Mantine');
    });
});