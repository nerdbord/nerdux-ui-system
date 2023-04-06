import { Meta, Story } from '@storybook/react'
import Button from './Button'
import React from 'react'

export default {
	component: Button,
} as Meta

export const Default: Story = args => (
	<Button isLoading={false} variant={'primary'} {...args} onClick={() => console.log('clicked')}>
		Button
	</Button>
)
Default.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false,
}
