import {
    StyledCard,
    CardImg,
    Badge,
    Flex,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardMore,
} from "./style";

const Card = ({ poke }) => {
    return (
        <>
            <StyledCard>
                <CardHeader>
                    <Flex>
                        <CardImg src={poke.img} />
                        <Badge variant='rounded' position='absolute'>
                            {poke.num}
                        </Badge>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Flex>
                        <CardTitle>{poke.name}</CardTitle>
                        <Badge>{poke.type[0]}</Badge>
                    </Flex>
                    <CardSubtitle>{poke.candy}</CardSubtitle>
                    <Flex>
                        <CardMore>
                            H <b>{poke.height}</b>
                        </CardMore>
                        <CardMore>
                            W <b>{poke.weight}</b>
                        </CardMore>
                        <CardMore>
                            T <b>{poke.spawn_time}</b>
                        </CardMore>
                    </Flex>
                </CardBody>
            </StyledCard>
        </>
    );
};

export default Card;
