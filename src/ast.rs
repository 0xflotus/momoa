use crate::location::*;
use crate::tokens::Token;
use serde::Serialize;

#[derive(Debug, Clone, PartialEq, Serialize)]
pub enum Node {
    Document(Box<DocumentNode>),
    String(Box<ValueNode<String>>),
    Number(Box<ValueNode<f64>>),
    Boolean(Box<ValueNode<bool>>),
    Null(Box<NullNode>),
    Array(Box<ArrayNode>),
    Object(Box<ObjectNode>),
    Member(Box<MemberNode>),
    Element(Box<ValueNode<Node>>)
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct ValueNode<T> {
    pub value: T,
    pub loc: LocationRange,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct ObjectNode {
    pub members: Vec<Node>,
    pub loc: LocationRange,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct ArrayNode {
    pub elements: Vec<Node>,
    pub loc: LocationRange,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct MemberNode {
    pub name: Node,
    pub loc: LocationRange,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct ElementNode {
    pub value: Node,
    pub loc: LocationRange,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct NullNode {
    pub loc: LocationRange,
}

#[derive(Debug, Clone, PartialEq, Serialize)]
pub struct DocumentNode {
    pub body: Node,
    pub loc: LocationRange,
    pub tokens: Vec<Token>
}
