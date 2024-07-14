import {
  OperatorSharesDecreased as OperatorSharesDecreasedEvent,
  OperatorSharesIncreased as OperatorSharesIncreasedEvent,
  StakerDelegated as StakerDelegatedEvent,
  StakerForceUndelegated as StakerForceUndelegatedEvent,
  StakerUndelegated as StakerUndelegatedEvent,
} from "../generated/EigenLayer_Delegation_Manager/EigenLayer_Delegation_Manager";
import {
  OperatorSharesDecreased,
  OperatorSharesIncreased,
  StakerDelegated,
  StakerForceUndelegated,
  StakerUndelegated,
} from "../generated/schema";

export function handleOperatorSharesDecreased(
  event: OperatorSharesDecreasedEvent
): void {
  let entity = new OperatorSharesDecreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;
  entity.staker = event.params.staker;
  entity.strategy = event.params.strategy;
  entity.shares = event.params.shares;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOperatorSharesIncreased(
  event: OperatorSharesIncreasedEvent
): void {
  let entity = new OperatorSharesIncreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.operator = event.params.operator;
  entity.staker = event.params.staker;
  entity.strategy = event.params.strategy;
  entity.shares = event.params.shares;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStakerDelegated(event: StakerDelegatedEvent): void {
  let entity = new StakerDelegated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.staker = event.params.staker;
  entity.operator = event.params.operator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStakerForceUndelegated(
  event: StakerForceUndelegatedEvent
): void {
  let entity = new StakerForceUndelegated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.staker = event.params.staker;
  entity.operator = event.params.operator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleStakerUndelegated(event: StakerUndelegatedEvent): void {
  let entity = new StakerUndelegated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.staker = event.params.staker;
  entity.operator = event.params.operator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
