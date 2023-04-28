import React, { PropsWithChildren } from 'react'
import styles from './Link.module.css'
import { Plus } from '../../icons'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface LinkProps {
	to: string
	id?: string
	target?: '_blank' | '_self' | '_parent' | '_top'
	disabled?: boolean
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
	icon?: React.ReactNode
}

export const Link = ({
	id = 'google',
	target = '_blank',
	disabled = false,
	children,
	icon,
}: PropsWithChildren<LinkProps>) => {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		{
			disabled && event.preventDefault()
		}
	}

	const linkClasses = cx({
		linkGlobal: true,
		linkDisabled: disabled,
	})
	return (
		<a className={linkClasses} id={id} target={target} onClick={handleClick}>
			{icon && (
				<span className={styles.iconSettings}>
					<Plus />
				</span>
			)}
			{children}
		</a>
	)
}
