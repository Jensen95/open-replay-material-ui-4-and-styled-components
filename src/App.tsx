import React, { FunctionComponent } from 'react'
import { withSentryRouting } from '@sentry/react'
import styled from 'styled-components'
import { Header } from './Header'
import { Route, Switch, useHistory } from 'react-router-dom'
import { PrimaryButton, SecondaryButton, TertiaryButton } from './Buttons'

const AppContent = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	flex-grow: 1;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
`

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const landingStep = {
	id: 1,
	displayName: 'landingStep-title',
	paths: ['/splash'],
}
const consentStep = {
	id: 2,
	displayName: 'consentStep-title',
	paths: ['/consent'],
}
const nextStep = {
	id: 3,
	displayName: 'nextStep-title',
	paths: ['/next'],
}
const bankStep = {
	id: 4,
	displayName: 'bankStep-title',
	paths: ['/bank'],
}
const steps = [landingStep, consentStep, nextStep, bankStep]
const stepNames = steps.map((step) => step.displayName)

const SentryRoute = withSentryRouting(Route)

export const App: FunctionComponent<{ children?: never }> = () => {
	const { push } = useHistory()
	return (
		<PageWrapper>
			<Header steps={stepNames} activeStep={consentStep.id} clientLogoSrc="" />
			<AppContent>
				<Switch>
					<SentryRoute path={landingStep.paths} exact>
						<p>Hello</p>
						<PrimaryButton onClick={() => push(consentStep.paths[0])}>
							Next
						</PrimaryButton>
					</SentryRoute>
					<SentryRoute path={consentStep.paths} exact>
						<p>Consent</p>
						<SecondaryButton onClick={() => push(nextStep.paths[0])}>
							Next
						</SecondaryButton>
					</SentryRoute>
					<SentryRoute path={nextStep.paths} exact>
						<p>Next</p>
						<TertiaryButton onClick={() => push(bankStep.paths[0])}>
							Next
						</TertiaryButton>
					</SentryRoute>
					<SentryRoute path={bankStep.paths} exact>
						<p>Banking</p>
						<SecondaryButton onClick={() => push(consentStep.paths[0])}>
							Next
						</SecondaryButton>
					</SentryRoute>
					<SentryRoute path="/" exact>
						<p>Initial</p>
						<PrimaryButton onClick={() => push(landingStep.paths[0])}>
							Next
						</PrimaryButton>
					</SentryRoute>
				</Switch>
			</AppContent>
		</PageWrapper>
	)
}
