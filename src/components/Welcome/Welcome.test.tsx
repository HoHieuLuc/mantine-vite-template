import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome component', () => {
    it('has correct title', () => {
        render(<Welcome />);
        expect(screen.getByLabelText('title').textContent).toEqual('Welcome to Mantine');
    });
});