import { gql } from "@apollo/client";

export const GET_USER_BY_EMAIL = gql`
  query MyQuery($email: String = "") {
    users(where: { email: { _eq: $email } }) {
      id
      password
      fullname
    }
  }
`;

export const GET_USER = gql`
  query MyQuery {
    users {
      id
      fullname
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query MyQuery($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      email
      fullname
      bacaan_terakhirs(order_by: { updated_at: desc }) {
        ayat
        nama_surat
      }
      bacaan_favorites {
        id
        ayat
        nama_surat
        nomor_surat
      }
    }
  }
`;

export const INSERT_USER_ONE = gql`
  mutation insertUser($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
    }
  }
`;

export const INSERT_FAVORITE = gql`
  mutation insertFavorite($object: bacaan_favorite_insert_input!) {
    insert_bacaan_favorite_one(object: $object) {
      id
      nama_surat
      ayat
      nomor_surat
    }
  }
`;

export const INSERT_LAST_READ_ONE = gql`
  mutation insertLatesRead($object: bacaan_terakhir_insert_input!) {
    insert_bacaan_terakhir_one(object: $object) {
      id
      nama_surat
      ayat
      user_id
    }
  }
`;

export const UPDATE_LAST_READ = gql`
  mutation UpdateLastRead($user_id: Int!, $nama_surat: String, $ayat: Int!) {
    update_bacaan_terakhir(
      where: { user_id: { _eq: $user_id } }
      _set: { nama_surat: $nama_surat, ayat: $ayat }
    ) {
      returning {
        ayat
      }
    }
  }
`;

export const DELETE_FAVORITE_ONE = gql`
  mutation MyMutation($id: Int!) {
    delete_bacaan_favorite_by_pk(id: $id) {
      nama_surat
      ayat
    }
  }
`;
