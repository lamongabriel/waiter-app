import styled from 'styled-components/native'
import { THEME } from '../../theme'

export const TableModalOverlay = styled.KeyboardAvoidingView`
	background-color: rgba(0, 0, 0, 0.3);
	flex: 1;
	align-items: stretch;
	justify-content: center;
	padding: 0 24px;
`
export const TableModalBody = styled.View`
	background-color: ${THEME.COLORS.BACKGROUND_COLOR};
	padding: 24px;
	border-radius: 8px;
`

export const TableModalHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const TableModalForm = styled.View`
	margin-top: 32px;
`

export const TableModalInput = styled.TextInput`
	background: #FFFFFF;
	border: 1px solid rgba(204, 204, 204, 0.5);
	padding: 12px;
	border-radius: 8px;
	margin-bottom: 24px;
`
