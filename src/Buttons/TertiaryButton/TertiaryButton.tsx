import { FocusableRef } from '@react-types/shared'
import React, { forwardRef } from 'react'
import { BaseButton, BaseButtonProps } from '../BaseButton'

export const TertiaryButton = forwardRef<FocusableRef<HTMLElement>, Omit<BaseButtonProps, 'buttonType'>>((props: any, ref) => (
	<BaseButton {...props} ref={ref} buttonType='tertiary' />
))
