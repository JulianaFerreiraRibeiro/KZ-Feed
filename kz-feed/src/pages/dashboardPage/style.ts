import styled from "styled-components"

export const StyledDashboardSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 90px;
    justify-content: center;

    .dashboardHeader{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;

        .dashboardName{
            font-weight: var(--font-weight-1);
        }

        img{
            margin-top: 15px;
        }
    }

    .dashboardMain{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 150px;
    }
`