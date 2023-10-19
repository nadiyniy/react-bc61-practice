import styled from 'styled-components'

export const StyledWrapper = styled.div`
	margin: 0 auto;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	max-width: 400px;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0px 4px 10px 4px gray;
`

export const StyledImg = styled.img`
	width: 100%;
	margin-bottom: 10px;
`
export const StyledInfo = styled.div`
	padding: 10px;
	& span {
		padding: 4px 6px;
		background: linear-gradient(to bottom, #ffd194, #d1913c);
		border-radius: 12px;
		color: white;
		margin-bottom: 10px;
	}
	& h3 {
		font-weight: 700;
		font-size: 28px;
	}
`

export const StyledWrapperImg = styled.div`
	display: flex;
	gap: 8px;
	padding: 10px;
	& img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	& div {
		display: flex;
		flex-direction: column;
		gap: 5px;
		& p:nth-child(1) {
			font-weight: 700;
		}
	}
`
