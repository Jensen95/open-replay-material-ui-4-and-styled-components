import { useButton } from '@react-aria/button'
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { useFocusableRef } from '@react-spectrum/utils'
import { FocusableRef, PressEvent } from '@react-types/shared'
import React, {
	ElementType,
	forwardRef,
	ReactNode,
	useCallback,
	useState,
	ComponentProps,
} from 'react'
import { StyledButton } from './baseButtonStyles'
import { ButtonTypes } from './baseButtonOverrideStyles'
import { LoadingContainer } from './ButtonLoadingContainer'

export type BaseButtonProps = {
	/** Show a tooltip on the button */
	id?: string
	className?: string
	/** HTML element of button, shouldn't need to be changed i most cases */
	elementType?: ElementType
	/** Disable button, if not given the button will based upon `loading` */
	disabled?: boolean
	onClick?: (e: PressEvent) => Promise<any | void> | void
	/** Set loading of button, if not given the button will set loading based on promise from `onClick` */
	loading?: boolean
	/** Button contents */
	children?: ReactNode
	buttonType?: ButtonTypes
} & (
	| { tooltip?: never; tooltipPlacement?: never }
	| { tooltip: ReactNode; tooltipPlacement?: string }
)

export const BaseButton = forwardRef<
	FocusableRef<HTMLElement>,
	BaseButtonProps
>((props, ref) => {
	const { onClick, tooltip, tooltipPlacement, buttonType, ...restProps } = props
	const { children, className, disabled, elementType } = restProps
	const [internalLoading, setInternalLoading] = useState(false)
	const { focusProps, isFocusVisible } = useFocusRing()
	const domRef = useFocusableRef(ref as any)
	const handlePress = async (e: PressEvent) => {
		setInternalLoading(true)
		const handlerResponse = onClick?.(e)
		await Promise.resolve(handlerResponse)
		setInternalLoading(false)
	}
	const onPress = useCallback(
		(e: PressEvent) => {
			if (onClick != null) {
				// Handling Press Event in the next tick prevents the new page from receiving the old click event
				// The following was discovered in the Bank Selector when rendered in the WebView:
				// - when user clicks "Add another bank" new react-aria Press event is triggered,
				// - onPress handler executes with SyntheticEvent and replaces the history
				// - JS native click event is received on the new page and therefore bank is being selected
				// window.setTimeout makes sure that the native browser click event is handled before onPress SyntheticEvent and the new page render
				window.setTimeout(() => handlePress(e), 0)
			}
		},
		[onClick, setInternalLoading],
	)
	const loading = props.loading != null ? props.loading : internalLoading
	const { buttonProps, isPressed } = useButton(
		{ ...restProps, onPress, isDisabled: disabled || loading },
		domRef,
	)
	const { hoverProps, isHovered } = useHover({ isDisabled: disabled })

	const internalDisable = disabled || loading

	// Google Translate, when used, replaces text nodes with <font> tags containing translations,
	// while React keeps references to the text nodes that are no longer in the DOM tree.
	// We wrap those text nodes with <span> to ensure that the nodes referenced by React remain in the DOM tree.
	const childrenToRender =
		typeof children === 'string' ? <span>{children}</span> : children

	const button = (
		<StyledButton
			{...mergeProps(buttonProps, hoverProps, focusProps, { className })}
			as={elementType}
			ref={domRef}
			$hovering={isHovered}
			$focused={isFocusVisible}
			$pressed={isPressed}
			$loading={loading}
			$buttonType={buttonType}
			disabled={internalDisable}
		>
			{loading ? <LoadingContainer /> : null}
			{childrenToRender}
		</StyledButton>
	)

	return button
})

BaseButton.defaultProps = {
	elementType: 'button',
}
// as FunctionComponent<BaseButtonProps>
// const _BaseButton = React.forwardRef(BaseButton) as <T extends ElementType = 'button'>(
// const _BaseButton = React.forwardRef(BaseButton as any) as FunctionComponent<BaseButtonProps>
// export { _BaseButton as BaseButton }
