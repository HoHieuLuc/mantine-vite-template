import { ColorSchemeProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorSchemeToggle } from './ColorSchemeToggle';

describe('Color Scheme Toggle component', () => {
    it('should toggle', async () => {
        const mockFn = jest.fn();
        const user = userEvent.setup();

        render(
            <ColorSchemeProvider
                colorScheme={'light'}
                toggleColorScheme={mockFn}
            >
                <ColorSchemeToggle />
            </ColorSchemeProvider>
        );

        const toggleButton = screen.getByLabelText('toggle color scheme');
        expect(toggleButton.textContent).toBe('Dark');

        await user.click(toggleButton);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});