import { styled } from "styled-components";

const StyledCard = styled.div`
    width: 253px;
    height: 381px;
    border-radius: 16px;
    border: 11px solid #4b5563;
    background-color: #fff;
    overflow: hidden;
    position: relative;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CardHeader = styled.div`
    width: 100%;
    background-color: #fff;
`;

const CardBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #e5e7eb;
    padding: 15px 21px;
`;

const CardImg = styled.img`
    width: 100%;
    height: 213px;
`;

const Badge = styled.span`
    display: block;
    padding: ${({ variant }) => (variant ? "8px 4px" : "4px 8px")};
    border-radius: ${({ variant }) => (variant ? "50%" : "14px")};
    background-color: #374151;
    color: #fff;
    font-weight: 600;
    position: ${({ position }) => (position ? position : "static")};
    right: calc(12px);
    top: calc(12px);
    z-index: 99;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    line-height: 28px;
    color: #1f2937;
    /* margin-right: 8px; */
`;

const CardSubtitle = styled.p`
    margin-top: 2px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: #6b7280;
`;

const CardMore = styled.span`
    padding: 4px;
    border-radius: 4px;
    background-color: #f3f4f6;

    color: #374151;
    font-size: 12px;
    line-height: 16px;
`;

export {
    StyledCard,
    CardImg,
    Badge,
    Flex,
    CardBody,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardMore,
};
