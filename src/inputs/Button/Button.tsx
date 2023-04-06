import React from 'react'
import styles from './Button.module.css'
import { Spinner } from '../../icons'
import { Plus } from '../../icons'
import { Fragment } from 'react'
import { calculateDefaultDimensions } from '../../icons/Plus'

interface ButtonProps {
	type?: 'button' | 'submit'
	disabled?: boolean
	isLoading: boolean
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	variant: 'primary' | 'secondary'
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	disabled = false,
	isLoading = false,
	variant = 'primary',
	children,
}) => {
	console.log(calculateDefaultDimensions(16, 50));
	const globalButtonClass = styles.buttons
	const variantClass = variant === 'primary' ? styles.primary : styles.secondary
	const disabledClass = disabled ? (variant === 'primary' ? styles.disabledPrimary : styles.disabledSecondary) : ''
	const loadingClass = isLoading ? (variant === 'primary' ? styles.loadingPrimary : styles.loadingSecondary) : ''

	const allClasses = [globalButtonClass, variantClass, disabledClass, loadingClass].join(' ')
	return (
		<button className={allClasses} type={type} disabled={disabled}>
			{isLoading ? (
				<>
					<span className={styles.iconSpinner}>
						<Spinner />
					</span>
					{children}
				</>
			) : (
				<>
					<span className={styles.iconPlus}>
						<Plus scale={10} color='black' />
					</span>
					{children}
				</>
			)}
		</button>
	)
}

export default Button
