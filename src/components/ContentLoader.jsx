import styled, { keyframes } from 'styled-components';

const CommonSkeleton = styled.div`
	overflow: hidden;
`;
const InputSkeleton = styled(CommonSkeleton)`
	width: 90vw;
	height: 43px;
	border-radius: 4px;
	margin: 30px auto;
	background-color: #eee;
`;
const WeekListSkeleton = styled(CommonSkeleton)`
	width: 70vw;
	border-radius: 4px;
	height: 100px;
	margin: 30px auto;
	background-color: #eee;
`;
const WeatherDetailSkeleton = styled(CommonSkeleton)`
	margin: 30px auto;
	width: 95vw;
	border-radius: 4px;
	height: 300px;
	background-color: #eee;
`;
const animation = keyframes`
0%{
	transform: translate(0%);
}
100%{
 	transform: translate(100%);
}
`;
const SkeletonIndicator = styled.div`
	width: 5px;
	height: 100%;
	box-shadow: 0px 0px 50px 100px rgba(248, 248, 250, 0.4);
	background-color: #f7f2f2;
`;
const SkeletonWrapper = styled.div`
	transform: translate(100%);
	height: 100%;
	animation: 2s ${animation} linear infinite;
`;
const ContentLoader = () => {
	return (
		<>
			<InputSkeleton>
				<SkeletonWrapper>
					<SkeletonIndicator />
				</SkeletonWrapper>
			</InputSkeleton>
			<WeekListSkeleton>
				<SkeletonWrapper>
					<SkeletonIndicator />
				</SkeletonWrapper>
			</WeekListSkeleton>
			<WeatherDetailSkeleton>
				<SkeletonWrapper>
					<SkeletonIndicator />
				</SkeletonWrapper>
			</WeatherDetailSkeleton>
		</>
	);
};
export default ContentLoader;
